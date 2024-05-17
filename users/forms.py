# import the default jhango forms
from django.contrib.auth.forms import UserCreationForm, AuthenticationForm
# import default user model

from .models import User, Course
from django import forms
from django.forms.widgets import PasswordInput, TextInput


# create/register a user (Model Form)
class CreateUserForm(UserCreationForm):
    class Meta:
        model = User
        fields = ['username', 'email', 'password1', 'password2']


# - Authenticate a user (Model Form)
class LoginForm(AuthenticationForm):
    username = forms.CharField(widget=TextInput())
    password = forms.CharField(widget=PasswordInput())


class MultipleFileInput(forms.ClearableFileInput):
    allow_multiple_selected = True


class MultipleFileField(forms.FileField):
    def __init__(self, *args, **kwargs):
        kwargs.setdefault("widget", MultipleFileInput())
        super().__init__(*args, **kwargs)

    def clean(self, data, initial=None):
        single_file_clean = super().clean
        if isinstance(data, (list, tuple)):
            result = [single_file_clean(d, initial) for d in data]
        else:
            result = single_file_clean(data, initial)
        return result


class FilesForm(forms.ModelForm):
    class Meta:
        model = Course
        fields = '__all__'

    file = MultipleFileField()
