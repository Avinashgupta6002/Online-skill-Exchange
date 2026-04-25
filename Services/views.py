from django.shortcuts import render

# Create your views here.

def services(Req):
    return render(Req ,'Services/index.html')
