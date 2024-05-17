from django.db import models
from django.contrib.auth.models import User
from django.utils import timezone
from django.utils.translation import gettext_lazy as _
import uuid
from random import choices
# https://docs.djangoproject.com/en/5.0/topics/auth/customizing/
from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin, BaseUserManager


# custom user manager
class CustomUserManager(BaseUserManager):

    def create_user(self, email, user_name, first_name, password, **other_fields):
        # add validation rules
        if not email:
            raise ValueError(_('Please enter a valid email address'))

        email = self.normalize_email(email)
        user = self.model(email=email, user_name=user_name,
                          first_name=first_name, **other_fields)
        user.set_password(password)
        user.save()
        return user

    def create_superuser(self, email, user_name, first_name, password, **other_fields):
        other_fields.setdefault('is_staff', True)
        other_fields.setdefault('is_superuser', True)
        other_fields.setdefault('is_active', True)

        # add validation rules
        if other_fields.get('is_staff') is not True:
            raise ValueError('You must be assigned to is_staff=True.')
        if other_fields.get('is_superuser') is not True:
            raise ValueError('You must be assigned to is_superuser=True.')

        return self.create_user(email, user_name, first_name, password, **other_fields)


# Create your models here.
class NewUser(AbstractBaseUser, PermissionsMixin):
    email = models.EmailField(_('Email address'), unique=True)
    user_name = models.CharField(_('Username'), max_length=150, unique=True)

    first_name = models.CharField(_('First name'), max_length=100, blank=True)
    last_name = models.CharField(_('Last name'), max_length=100, blank=True)

    start_date = models.DateTimeField(auto_now_add=True)
    about = models.TextField(_('About'), max_length=500, blank=True)

    is_staff = models.BooleanField(default=False)
    is_active = models.BooleanField(default=False)

    # we define that we are using custom user manager
    objects = CustomUserManager()

    # change the username with email for loggin
    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['user_name', 'first_name']

    def __str__(self):
        return self.user_name


class Course(models.Model):
    name = models.CharField(max_length=255)
    year = models.CharField(max_length=10)
    semester = models.CharField(max_length=200)
    user_id = models.IntegerField()
    file = models.FileField(upload_to='', blank=True, null=True)
    date = models.DateTimeField(auto_now_add=True, verbose_name='date')
