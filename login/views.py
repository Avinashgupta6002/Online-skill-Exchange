from django.shortcuts import render,redirect
from .models import signup_teacher,signup_student

# Create your views here.
def login(Req):
    return render(Req , 'login/index.html')

def student(Req):
    if Req.method=='POST':
        signup_student.objects.create(
            fname=Req.POST.get('fname'),
            lname=Req.POST.get('lname'),
            email=Req.POST.get('email'),
            education=Req.POST.get('education'),
            interest=Req.POST.get('interest'),
            password=Req.POST.get('pwd'),
            phone_number=Req.POST.get('phone'),
        )
        return render(Req,'login/index.html')
    return render(Req , "signup/signup_student.html")

def teacher(Req):
    if Req.method=='POST':
        signup_teacher.objects.create(
            first_name=Req.POST.get('fname'),
            last_name=Req.POST.get('lname'),
            teacher_email=Req.POST.get('email'),
            subject=Req.POST.get('subject'),
            experience=Req.POST.get('experience'),
            teacher_password=Req.POST.get('pwd'),
            teacher_phone_number=Req.POST.get('phone1'),
        )
        return render(Req,'login/index.html')
    return render(Req , "signup/signup_teacher.html")