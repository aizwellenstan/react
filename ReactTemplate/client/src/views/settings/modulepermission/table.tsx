import React, { useState } from 'react'

export const Table = () => {
    let MDMonitorCheckbox = []
    let UDMonitorCheckbox = []
    let GDMonitorCheckbox = []
    let MHMonitorCheckbox = []
    let UHMonitorCheckbox = []
    let GHMonitorCheckbox = []
    let MWMonitorCheckbox = []
    let UWMonitorCheckbox = []
    let GWMonitorCheckbox = []
    let MDEditorCheckbox = []
    let UDEditorCheckbox = []
    let GDEditorCheckbox = []
    let MHEditorCheckbox = []
    let UHEditorCheckbox = []
    let GHEditorCheckbox = []

    let table=[]
    const getSecondPart=(str :String)=> { 
      var strArray = str.split('-')
      return strArray[strArray.length - 2];
    }
    const getThirdPart=(str: String)=> { 
        var strArray = str.split('-')
        return strArray[strArray.length - 1];
    }
    const handleClick = (e) => {
      var id = parseInt(getThirdPart(e.target.id))
      console.log("handleClick=>")
      console.log(id)
      var group = getSecondPart(e.target.id)
      console.log(group)
      switch (group) {
        case 'MDMonitor':
          var currentMDM = JSON.stringify(MDMonitor)
          currentMDM = JSON.parse(currentMDM)
          currentMDM[id] = !MDMonitor[id]
          setMDMonitor(currentMDM)
          break;
        case 'UDMonitor':
          var currentUDM = JSON.stringify(UDMonitor)
          currentUDM = JSON.parse(currentUDM)
          currentUDM[id] = !UDMonitor[id]
          setUDMonitor(currentUDM)
          break;
        case 'GDMonitor':
          var currentGDM = JSON.stringify(GDMonitor)
          currentGDM = JSON.parse(currentGDM)
          currentGDM[id] = !GDMonitor[id]
          setGDMonitor(currentGDM)
          break;
        case 'MHMonitor':
          var currentMHM = JSON.stringify(MHMonitor)
          currentMHM = JSON.parse(currentMHM)
          currentMHM[id] = !MHMonitor[id]
          setMHMonitor(currentMHM)
          break;
        case 'UHMonitor':
          var currentUHM = JSON.stringify(UHMonitor)
          currentUHM = JSON.parse(currentUHM)
          currentUHM[id] = !UHMonitor[id]
          setUHMonitor(currentUHM)
          break;
        case 'GHMonitor':
          var currentGHM = JSON.stringify(GHMonitor)
          currentGHM = JSON.parse(currentGHM)
          currentGHM[id] = !GHMonitor[id]
          setGHMonitor(currentGHM)
          break;
        case 'MWMonitor':
          var currentMWM = JSON.stringify(MWMonitor)
          currentMWM = JSON.parse(currentMWM)
          currentMWM[id] = !MWMonitor[id]
          setMWMonitor(currentMWM)
          break;
        case 'UWMonitor':
          var currentUWM = JSON.stringify(UWMonitor)
          currentUWM = JSON.parse(currentUWM)
          currentUWM[id] = !UWMonitor[id]
          setUWMonitor(currentUWM)
          break;
        case 'GWMonitor':
          var currentGWM = JSON.stringify(GWMonitor)
          currentGWM = JSON.parse(currentGWM)
          currentGWM[id] = !GWMonitor[id]
          setGWMonitor(currentGWM)
          break;
        case 'MDEditor':
          var currentMD = JSON.stringify(MDEditor)
          currentMD = JSON.parse(currentMD)
          currentMD[id] = !MDEditor[id]
          setMDEditor(currentMD)
          break;
        case 'UDEditor':
          var currentUD = JSON.stringify(UDEditor)
          currentUD = JSON.parse(currentUD)
          currentUD[id] = !UDEditor[id]
          setUDEditor(currentUD)
          break;
        case 'GDEditor':
          var currentGD = JSON.stringify(GDEditor)
          currentGD = JSON.parse(currentGD)
          currentGD[id] = !GDEditor[id]
          setGDEditor(currentGD)
          break;
        case 'MHEditor':
          var currentMHE = JSON.stringify(MHEditor)
          currentMHE = JSON.parse(currentMHE)
          currentMHE[id] = !MHEditor[id]
          setMHEditor(currentMHE)
          break;
        case 'UHEditor':
          var currentUHE = JSON.stringify(UHEditor)
          currentUHE = JSON.parse(currentUHE)
          currentUHE[id] = !UHEditor[id]
          setUHEditor(currentUHE)
          break;
        case 'GHEditor':
          var currentGHE = JSON.stringify(GHEditor)
          currentGHE = JSON.parse(currentGHE)
          currentGHE[id] = !GHEditor[id]
          setUHEditor(currentGHE)
          break;
        default:
          console.log('Err');
      }
    }

    for (let i = 0; i < 23; i++) {
      MDMonitorCheckbox.push(
        <input 
          id={"MDMonitor-"+i.toString()} 
          type="checkbox" 
          checked={MDMonitor[i]} 
          onClick={()=>{handleClick(event)}}
        />, 
        monitorArray[i], 
        <br />
      )

      UDMonitorCheckbox.push(
        <input 
          id={"UDMonitor-"+i.toString()} 
          type="checkbox" 
          checked={UDMonitor[i]} 
          onClick={()=>{handleClick(event)}}
        />, 
        monitorArray[i], 
        <br />
      )

      GDMonitorCheckbox.push(
        <input 
          id={"GDMonitor-"+i.toString()} 
          type="checkbox" 
          checked={GDMonitor[i]} 
          onClick={()=>{handleClick(event)}}
        />, 
        monitorArray[i], 
        <br />
      )

      MHMonitorCheckbox.push(
        <input 
          id={"MHMonitor-"+i.toString()} 
          type="checkbox" 
          checked={MHMonitor[i]} 
          onClick={()=>{handleClick(event)}}
        />, 
        monitorArray[i], 
        <br />
      )

      UHMonitorCheckbox.push(
        <input 
          id={"UHMonitor-"+i.toString()} 
          type="checkbox" 
          checked={UHMonitor[i]} 
          onClick={()=>{handleClick(event)}}
        />, 
        monitorArray[i], 
        <br />
      )

      GHMonitorCheckbox.push(
        <input 
          id={"GHMonitor-"+i.toString()} 
          type="checkbox" 
          checked={GHMonitor[i]} 
          onClick={()=>{handleClick(event)}}
        />, 
        monitorArray[i], 
        <br />
      )

      MWMonitorCheckbox.push(
        <input 
          id={"MWMonitor-"+i.toString()} 
          type="checkbox" 
          checked={MWMonitor[i]} 
          onClick={()=>{handleClick(event)}}
        />, 
        monitorArray[i], 
        <br />
      )

      UWMonitorCheckbox.push(
        <input 
          id={"UWMonitor-"+i.toString()} 
          type="checkbox" 
          checked={UWMonitor[i]} 
          onClick={()=>{handleClick(event)}}
        />, 
        monitorArray[i], 
        <br />
      )

      GWMonitorCheckbox.push(
        <input 
          id={"GWMonitor-"+i.toString()} 
          type="checkbox" 
          checked={GWMonitor[i]} 
          onClick={()=>{handleClick(event)}}
        />, 
        monitorArray[i], 
        <br />
      )
    }
    
    for (let i = 0; i < 23; i++) {
      UDEditorCheckbox.push(
        <input 
          id={"UDEditor-"+i.toString()} 
          type="checkbox" 
          checked={UDEditor[i]} 
          onClick={()=>{handleClick(event)}}
        />, 
        monitorArray[i], 
        <br />
      )
    }
    for (let i = 0; i < 23; i++) {
      GDEditorCheckbox.push(
        <input 
          id={"GDEditor-"+i.toString()} 
          type="checkbox" 
          checked={GDEditor[i]} 
          onClick={()=>{handleClick(event)}}
        />, 
        monitorArray[i], 
        <br />
      )
    }
    
    for (let i = 0; i < 23; i++) {
      MHEditorCheckbox.push(
        <input 
          id={"MHEditor-"+i.toString()} 
          type="checkbox" 
          checked={MHEditor[i]} 
          onClick={()=>{handleClick(event)}}
        />, 
        monitorArray[i], 
        <br />
      )
    }
    for (let i = 0; i < 23; i++) {
      UHEditorCheckbox.push(
        <input 
          id={"UHEditor-"+i.toString()} 
          type="checkbox" 
          checked={UHEditor[i]} 
          onClick={()=>{handleClick(event)}}
        />, 
        monitorArray[i], 
        <br />
      )
    }
    for (let i = 0; i < 23; i++) {
      GHEditorCheckbox.push(
        <input 
          id={"GHEditor-"+i.toString()} 
          type="checkbox" 
          checked={GHEditor[i]} 
          onClick={()=>{handleClick(event)}}
        />, 
        monitorArray[i], 
        <br />
      )
    }

    table.push(
      <table>
        <tr>
          <td colSpan={9} style={{textAlign:"center"}}>
            MonitorModeMainMenuBar
          </td>
        </tr>
        <tr>
          <td colSpan={3} style={{textAlign:"center"}}>
            Desktop
          </td>
          <td colSpan={3} style={{textAlign:"center"}}>
            HandHeld
          </td>
          <td colSpan={3} style={{textAlign:"center"}}>
            WebGL
          </td>
        </tr>
        <tr> 
          <td>Manager</td>
          <td>User</td>
          <td>Guest</td>
          <td>Manager</td>
          <td>User</td>
          <td>Guest</td>
          <td>Manager</td>
          <td>User</td>
          <td>Guest</td>
        </tr>
        <tr>
          <td>{MDMonitorCheckbox}</td>
          <td>{UDMonitorCheckbox}</td>
          <td>{GDMonitorCheckbox}</td>
          <td>{MHMonitorCheckbox}</td>
          <td>{UHMonitorCheckbox}</td>
          <td>{GHMonitorCheckbox}</td>
          <td>{MWMonitorCheckbox}</td>
          <td>{UWMonitorCheckbox}</td>
          <td>{GWMonitorCheckbox}</td>
        </tr>
        <br />
        <tr>
          <td colSpan={6} style={{textAlign:"center"}}>
            EditorModeMainMenuBar
          </td>
        </tr>
        <tr>
          <td colSpan={3} style={{textAlign:"center"}}>
            Desktop
          </td>
          <td colSpan={3} style={{textAlign:"center"}}>
            HandHeld
          </td>
        </tr>
        <tr> 
          <td>Manager</td>
          <td>User</td>
          <td>Guest</td>
          <td>Manager</td>
          <td>User</td>
          <td>Guest</td>
        </tr>
        <tr>
          <td>{MDEditorCheckbox}</td>
          <td>{UDEditorCheckbox}</td>
          <td>{GDEditorCheckbox}</td>
          <td>{MHEditorCheckbox}</td>
          <td>{UHEditorCheckbox}</td>
          <td>{GHEditorCheckbox}</td>
        </tr>
      </table>,
      <button onClick={()=>{handleSubmit()}}>Submmit</button>
    )
    return table
}