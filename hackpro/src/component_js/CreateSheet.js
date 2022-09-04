import React from 'react'
import '../component_css/createSheet.css'

function CreateSheet(props) {
  let f = '<'
  let s = '/>'
  return (
    <>
      <div className='create-box' onClick={props.fun}>
        <div className='dashed-box'>
          <div className='dev-symbols'>
            <h1>{f}</h1>
            <svg fill="white" className="bi bi-file-earmark-binary layer-svg" width="100" height="100" viewBox="0 0 16 16">
              <path d="M7.05 11.885c0 1.415-.548 2.206-1.524 2.206C4.548 14.09 4 13.3 4 11.885c0-1.412.548-2.203 1.526-2.203.976 0 1.524.79 1.524 2.203zm-1.524-1.612c-.542 0-.832.563-.832 1.612 0 .088.003.173.006.252l1.559-1.143c-.126-.474-.375-.72-.733-.72zm-.732 2.508c.126.472.372.718.732.718.54 0 .83-.563.83-1.614 0-.085-.003-.17-.006-.25l-1.556 1.146zm6.061.624V14h-3v-.595h1.181V10.5h-.05l-1.136.747v-.688l1.19-.786h.69v3.633h1.125z" />
              <path d="M14 14V4.5L9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2zM9.5 3A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5v2z" />
            </svg>
            <h1>{s}</h1>
          </div>
          <h4>Tap to Add New Sheet</h4>

        </div>
      </div>

    </>
  )
}

export default CreateSheet