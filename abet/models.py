from django.db import models
#from django.utils import timezone
from django.contrib.auth.models import AbstractBaseUser
import uuid
from random import choices

# Create your models here.
class Department(models.Model):
    dept_name=models.CharField(max_length=250,blank=False,verbose_name="Department Id")
    dept_id =models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False, verbose_name="Department Id")
    dept_major=models.CharField(max_length=250)
    dept_faculty_count=models.IntegerField(editable=True, blank=False, verbose_name="department faculty count")
    dept_student_count=models.IntegerField(editable=True, blank=False, verbose_name="department student count")
    dept_hod=models.CharField(max_length=250)
 # meta used for pural purposes in the Admin section. Such as bookings instead of booking when you have more than one booking.

    # The __str__() method returns a human-readable, or informal, string representation of an object. 
    # https://www.digitalocean.com/community/tutorials/python-str-repr-functions
def __str__(self):
        return self.dept_id
    
    # semester models
# semester models


class Semester(models.Model):
    SEMESTER_CHOICES = [
        ('first', 'First Semester'),
        ('second', 'Second Semester'),
    ]

    semester_id = models.IntegerField(primary_key=True)
    year = models.PositiveIntegerField()
    semester_choice = models.CharField(max_length=10, choices=SEMESTER_CHOICES)


    REQUIRED_FIELDS = ['semester_id']
 


    def _str_(self):
     return self.semester_id

    
    
class Course(models.Model):
    course_id = models.IntegerField(primary_key=True ,blank=False)
    dept_id = models.ForeignKey(Department, on_delete=models.SET_NULL, null=True)
    semester_id = models.ForeignKey(Semester, on_delete=models.SET_NULL, null=True)
    course_code = models.CharField(max_length=150, unique=True , blank=False)
    course_name = models.CharField(max_length=15 , blank=False)
    credit_hours = models.IntegerField(blank=False)
    course_offer_level = models.IntegerField(blank=False)
    pre_requisites = models.CharField(max_length=150, blank=False)
    
    
    
    REQUIRED_FIELD = ['course_code', 'course_name']
    
    def __str__(self):
        return self.course_code
    


 
 # CLOs models
class CLO(models.Model):

    course_id = models.ForeignKey(Course, on_delete=models.SET_NULL, null=True)
    CLO_id = models.IntegerField(primary_key=True,blank=False)
    CLO_name = models.CharField(max_length=150,blank=False)
    CLO_domain = models.CharField(max_length=150,blank=False)
    
    REQUIRED_FIELDS = ['CLO_id', 'CLO.name','CLO_domain']
    def str(self):
     return self.CLO_id