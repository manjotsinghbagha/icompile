from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Snippet
from .serializers import SnippetSerializer
import os


@api_view(['GET', 'POST'])
def snippet_list(request):
    """
    List all code snippets, or create a new snippet.
    """
    if request.method == 'GET':
        snippets = Snippet.objects.all()
        serializer = SnippetSerializer(snippets, many=True)
        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = SnippetSerializer(data=request.data)
        if serializer.is_valid():
            if serializer['language']
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET', 'PUT', 'DELETE'])
def snippet_detail(request, pk):
    """
    Retrieve, update or delete a code snippet.
    """
    try:
        snippet = Snippet.objects.get(pk=pk)
    except Snippet.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        serializer = SnippetSerializer(snippet)
        return Response(serializer.data)

    elif request.method == 'PUT':
        serializer = SnippetSerializer(snippet, data=request.data)
        if serializer.is_valid():
            serializer.save()

            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'DELETE':
        snippet.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)



@api_view(['GET', 'POST'])
def snippet_list(request):
    """
    List all code snippets, or create a new snippet.
    """
    if request.method == 'GET':
        snippets = Snippet.objects.all()
        serializer = SnippetSerializer(snippets, many=True)
        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = SnippetSerializer(data=request.data)
        if serializer.is_valid():
            if serializer['language']
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)







def runpy(code,arg):
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
