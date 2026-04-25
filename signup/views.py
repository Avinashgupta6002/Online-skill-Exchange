from django.shortcuts import render

# Create your views here.
def Teacher(Req):
    return render(Req , "teacher.html")

def student(Req):
    return render(Req , "student.html")