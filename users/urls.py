from django.urls import path
from . import views
from django.contrib.auth import views as auth_views
# we used . since views are in the same directory

urlpatterns = [
    path('login.html', views.login, name="login"),
    path('', views.homepage, name=""),
    path('register.html', views.register, name="register"),
    #path('login.html', views.login, name="login"),
    path('dashboard', views.dashboard, name="dashboard"),
    path('logout', views.logout, name="logout"),
    path('upload-excel-files', views.upload_excel_files, name="upload_excel_files"),
    path('list-files', views.list_files, name="list_files"),
    path('delete-file', views.delete_file, name='delete_file'),

    #reset password
    path('password_reset/',auth_views.PasswordResetView.as_view(),name='password_reset'),
    path('password_reset/done/',auth_views.PasswordResetDoneView.as_view(),name='password_reset_done'),
    path('reset/<uidb64>/<token>/',auth_views.PasswordResetConfirmView.as_view(),name='password_reset_confirm'),
    path('reset/done/',auth_views.PasswordResetCompleteView.as_view(),name='password_reset_complete'),

    path('show/', views.show, name="show"),
    path('profile/', views.profile, name="profile"),

    path('api/', views.api, name="api"),
    path('create/', views.createFile, name="create"),
    path('store/', views.storeFile, name="sss"),
    path('deleteExel/', views.deleteExel, name="store"),

]