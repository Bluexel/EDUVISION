from django.contrib import admin
from .models import Course
from .models import Department
from .models import Semester
from .models import CLO

# Register your models here.
admin.site.register(Course)
admin.site.register(Department)
admin.site.register(Semester)
admin.site.register(CLO)

