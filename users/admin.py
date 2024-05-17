from django.contrib import admin
from django.forms import Textarea
from .models import NewUser, Course
from django.contrib import admin

from django.contrib.auth.admin import UserAdmin

from django.contrib.auth.models import AbstractBaseUser


# Register your models here.


class UserAdminConfig(UserAdmin):
    # provide search facility in the admin
    search_fields = ('email', 'user_name', 'first_name', 'is_active', 'is_staff')
    # set filtering options
    list_filter = ('email', 'user_name', 'first_name', 'is_active', 'is_staff')
    # set the ordering of the users list in ascending or descending order using -
    ordering = ('-start_date',)
    # display grid list with the below list of fields in the grid table
    list_display = ('email', 'user_name', 'first_name', 'is_active', 'is_staff')
    # display user account details with subheadings in edit user page
    fieldsets = (
        ('Account Details',
         {'fields': ('email', 'user_name', 'first_name',)}),
        ('Permissions',
         {'fields': ('is_staff', 'is_active')}),
        ('Personal',
         {'fields': ('about',)}),
    )
    # display form fields with custom settings
    formfield_overrides = {
        NewUser.about: {'widget': Textarea(attrs={'rows': 10, 'cols': 40})},
    }
    # add fields for new user page
    add_fieldsets = (
        (None, {
            'classes': ('wide',),
            'fields': ('email', 'user_name', 'first_name', 'password1', 'password2', 'is_active', 'is_staff')
        }),
    )


admin.site.register(NewUser, UserAdminConfig)
admin.site.register(Course)
