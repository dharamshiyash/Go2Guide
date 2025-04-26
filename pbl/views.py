from django.http import HttpResponse
from django.shortcuts import render, redirect
import random
from User.models import User
from django.core.mail import send_mail,EmailMultiAlternatives
from city.models import City
from location.models import Destination



def login_view(request):
    if request.method == 'POST':
        username = request.POST['username']
        password = request.POST['password']
        try:
            user = User.objects.get(username=username, password=password)
            if user.is_verified:
                return render(request,'index.html', {'user':user})
            else:
                return render(request,'login.html',{'error1':True})
        except User.DoesNotExist:
            return render(request,"login.html",{'error2':True})
    return render(request, 'login.html')

def register_view(request):
    if request.method == 'POST':
        username = request.POST['username']
        email = request.POST['email']
        password = request.POST['password']
        confirm_password=request.POST['confirm-password']
        if password!=confirm_password:
            return render(request,'signup.html',{'error2':True})
        if User.objects.filter(username=username).exists() or User.objects.filter(email=email).exists():
            return render(request,'signup.html',{'error1':True})
        verification_code = str(random.randint(100000, 999999))
        
        # Create user
        user = User.objects.create(username=username, email=email, password=password, verification_code=verification_code)
        
        # Send verification email
        subject = 'Email Verification Code'
        message = f'Hello {username},\n\nYour verification code is: </b>{verification_code}</b>\n\nPlease use this code to verify your account.'
        from_email = 'dharamshiyash1810@gmail.com'
        to = email
        
        try:
            message=EmailMultiAlternatives(subject,message,from_email,[to])
            message.content_subtype='html'
            message.send()
            return redirect('/verify/')
        except Exception as e:
            # If email sending fails, delete the user and show error
            user.delete()
            return render(request, 'signup.html', {'error3': True})
    return render(request, 'signup.html')

def verify_view(request):
    if request.method == 'POST':
        code = request.POST['code']
        try:
            user = User.objects.get(verification_code=code)
            
            user.is_verified = True
            user.verification_code = None
            user.save()
            return redirect('/')
        except User.DoesNotExist:
            return render(request,'verify.html',{'error':True})
    return render(request, 'verify.html')


def forgot_password(request):
    if request.method=="POST":
        email=request.POST.get("email")
        try:
            user=User.objects.get(email=email)
            print(user)
            if user!=None:
                password=request.POST.get("password")
                user.password=password
                user.save()
                return redirect('/')
            
            
                
        except :
            return render(request,'forgot_password.html',{'error':True})

            pass
    return render(request,"forgot_password.html")

def Home(request):
    all_cities = list(City.objects.all())
    random_cities = random.sample(all_cities, min(3, len(all_cities)))  # Get 3 random cities, or less if there are fewer than 3
    data = {'City': random_cities}
    print(data)
    return render(request, 'index.html', data)


def profile(request):
    return render(request, 'profile.html', {'user': request.user})

def destination(request):
    City_data=City.objects.all()
    data={'City':City_data}
    return render(request,'destinations.html',data)


def des(request):
    City_data=City.objects.all()
    cat_set={cat.category for cat in City_data}
    data={'City':City_data,'Category':cat_set}
    return render(request,'d.html',data)


def Cat_detail(request, cat):
    category_detail=City.objects.filter(category=cat)
    #print(category_detail)
    City_data=City.objects.all()
    cat_set={cat.category for cat in City_data}
    data={'category':category_detail,'City':City_data,'Category':cat_set}
    return render(request, 'category_detail.html',data)


def City_detail(request, C):
    city_detail=City.objects.filter(name=C)
    location=Destination.objects.filter(city=C)
    
    data={'City_detail':city_detail,'Location':location}
    
    return render(request,'city_detail.html', data)


def loc_detail(request, l):
    loc_detail=Destination.objects.filter(name=l)
    print(loc_detail)
    data={'location':loc_detail}
    return render(request,'location_detail.html',data)

def generate_itinerary(request):
    days = int(request.GET.get('days'))
    city_name = request.GET.get('city')  

    
    all_locations = list(Destination.objects.filter(city__iexact=city_name))
    random.shuffle(all_locations)

    
    if days == 1:
        selected = all_locations[:4]
    else:
        selected = all_locations[:7]

  
    total_hours = sum([loc.duration_hours for loc in selected])
   


    context = {
        'city_name': city_name,
        'locations': selected,
        'days': days,
        'total_hours': total_hours,
    }

    return render(request, 'itinerary_map.html', context)

def about_us(request):
    return render(request, 'about-us.html')
