from django.shortcuts import render

# Create your views here.
def course(Req):
    return render(Req,'course/course.html')