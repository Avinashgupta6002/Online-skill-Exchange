from django.shortcuts import render

# Create your views here.
def home(Req):
    data={
        "title" :"Skill exchange"
    }
    return render(Req , 'home.html' , data)