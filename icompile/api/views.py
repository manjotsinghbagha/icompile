from re import A
from django.http import HttpResponse
from django.core.exceptions import PermissionDenied
from django.views.decorators.csrf import csrf_exempt
import os

@csrf_exempt
def run(request):
    if request.GET:
        if request.GET["language"] == "py":
            code = str(request.GET["code"]) 
            arg = str(request.GET["arg"])
            output = runpy(code, arg)
        elif request.GET["language"] == "java":
            code = str(request.GET["code"]) 
            arg = str(request.GET["arg"])
            output = runjava(code, arg)
        elif request.GET["language"] == "cpp":
            code = str(request.GET["code"] )
            arg = str(request.GET["arg"])
            output = runcpp(code, arg)
        else :
            raise PermissionDenied
        output = "{'output': '"+output+"' }"
        return HttpResponse(output , content_type="text/json-comment-filtered")

    else:
        raise PermissionDenied








def runpy(code  ,arg):
    py = open("python-docker/code.py", "w")
    py.write(code)
    py.close()
    dk = open("python-docker/Dockerfile", "w")
    dk.write('''FROM python:3.8-slim-buster \nWORKDIR /app \nCOPY code.py ./ \nCMD [ "python3", "code.py" , "''' + arg +'''"]''')
    dk.close()
    os.system("sudo docker build --tag python-docker ./python-docker/")
    stream = os.popen('sudo docker run python-docker')
    output = stream.read()
    return output
def runjava(code,arg):
    jv = open("java-docker/run.java", "w")
    jv.write(code)
    jv.close()
    dk = open("java-docker/Dockerfile", "w")

    dk.write('''FROM openjdk\nWORKDIR /var/www/java\nCOPY . /var/www/java\nRUN javac run.java\nCMD ["java", "run" ,"'''+arg+'''"]''')
    dk.close()
    os.system("sudo docker build --tag java-docker ./java-docker/")
    stream = os.popen('sudo docker run java-docker')
    output = stream.read()
    return output
def runcpp(code,arg):
    cp = open("cpp-docker/helloworld.cpp", "w")
    cp.write(code)
    cp.close()

    dk = open("cpp-docker/Dockerfile", "w")
    dk.write('''FROM gcc:4.9

    # Copy the current folder which contains C++ source code to the Docker image under /usr/src
    COPY . /usr/src/dockertest1

    # Specify the working directory
    WORKDIR /usr/src/dockertest1

    # Use GCC to compile the Test.cpp source file
    RUN g++ -o Test Test.cpp

    # Run the program output from the previous step
    CMD ["./Test"]
    ''')
    dk.close()

    os.system("sudo docker build --tag cp-docker ./cp-docker/")
    stream = os.popen('sudo docker run cp-docker')
    output = stream.read()
    print(output*10)
