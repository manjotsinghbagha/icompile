import React, { useState } from 'react'

import '../component_css/mvp.css'


function Mvp() {

    const boilerPlateCpp = `#include <bits/stdc++.h>        \nusing namespace std;  \n\nint main() {      \n\t// your code goes here        \n\tcout<<"Learn Code Online";          \n\treturn 0;       \n}`
    const boilerPlatePython = `print('learn code online')`
    const boilerPlateJava = `import java.util.*;        \nimport java.lang.*;   \nimport java.io.*;     \n\n /* Name of the class has to be "Main" only if the class is public. */          \nclass run {      \n\tpublic static void main (String[] args) throws java.lang.Exception {    \n\t // your code goes here \n\t System.out.println("learn code online..."); \n\t } \n}`


    const [lang, handleDrop] = useState("Learn");
    const [code_txt, codehandler] = useState("");
    const [input_txt, inputhandler] = useState("");
    const [output_txt, outputhandler] = useState("Learn Code Online...");


    function setCode(e) {
        codehandler(e.target.value)
    }


    function setInputs(e) {
        inputhandler(e.target.value)
    }

    function setOutputs(e) {
        outputhandler(e)
    }

    function setlang(e) {
        handleDrop(e.target.value)
        console.log(e.target.value)

        if (e.target.value === 'cpp') codehandler(boilerPlateCpp)
        if (e.target.value === 'py') codehandler(boilerPlatePython)
        if (e.target.value === 'java') codehandler(boilerPlateJava)

    }

    function saveCode(e) {

        fetch('https://dummyjson.com/products/1')
            .then(res => res.json())
            .then((json) => {
                console.log(json)
                setOutputs(JSON.stringify(json))
            })
            
        // setOutputs(input_txt)
    }

    function runCode(e) {
        let req = {
            'language': lang,
            'code': code_txt,
            'arg': input_txt
        }


        let options = {
            method: 'POST', // or 'PUT'
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(req),
          }

        //   fetch('http://194.195.114.99:8000/',options)
        //   .then(res => res.json())
        //   .then((json) => {
        //       console.log(json)
        //     //   setOutputs(JSON.stringify(json))
        //   })

          let url =`http://194.195.114.99:8000/?language=${lang}&code=${code_txt}&arg=${input_txt}`;
        //   let option = {  methog : 'GET  ',  mode: 'no-cors'  }
          fetch(url)
          .then(res => {return res.json()
            console.log(res)

        })
          .then((response) => {
              console.log(response['output'])
              outputhandler(response['output'])

          })
          .catch((e)=>{
            console.log(e)
          })

        console.log(req)
    }






    return (
        <>
            <div className='mvp'>

                {/* 
 --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
code input area */}

                <div className='work_area'>
                    <div className='drop-down '>
                        <select className="form-select" aria-label="Default select example" onChange={setlang}>
                            <span class="input-group-text" id="basic-addon1">@</span>
                            <option selected>Lang.</option>
                            <option value="cpp">C++</option>
                            <option value="py">Python</option>
                            <option value="java">Java</option>
                        </select>

                        <img width="200" src='./assets/ineuron-logo.png'/>
                    </div>
                    <div className="mb-3">
                        <label for="exampleFormControlTextarea1" className="form-label">Heyy Do You Write Code ??</label>
                        <textarea className="form-control form-text" id="exampleFormControlTextarea1" rows="20" placeholder='I Write Code...' value={code_txt} onChange={setCode}></textarea>


                        <input class="btn btn-primary mt-4" type="submit" value="Run Code" onClick={runCode}></input>
                        <input class="btn btn-primary mt-4 mx-3" type="submit" value="Save Code" onClick={saveCode}></input>

                    </div>



                    {/*  
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
result input and output bar                    */}

                    <div className='inputs'>
                        <div className="mb-3 ">
                            <label for="exampleFormControlTextarea1" className="form-label">INPUTS</label>
                            <textarea className="form-control inputs-form" id="exampleFormControlTextarea1" rows="5" placeholder='Enter Inputs here' value={input_txt} onChange={setInputs} ></textarea>
                        </div>

                        <div className="mb-3">

                            <label for="exampleFormControlTextarea1" className="form-label">OUTPUTS</label>
                            <div className="outputwindow">
                                <pre className='output-text' >{output_txt}</pre>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </>
    )
}

export default Mvp