from django.shortcuts import render

# Create your views here.
def about(Req):
        data={
        "title":"Minor Project",
        'image':"image/avinash.jpg",
        'image2':"image/bittu.jpg",
        'image1':"image/vishwajeet.jpg",
        }
        return render(Req , 'About/index.html',data)