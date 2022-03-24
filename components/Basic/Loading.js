import React, {useState, useEffect, useMemo} from "react";
import ReactDOM from "react-dom";
import { Spin } from "antd";
import { LoadingOutlined } from '@ant-design/icons';
const antIcon = <LoadingOutlined style={{ fontSize: 40 }} spin />;


let LoadingContainer = null
const modelSysbol = Symbol('$$__loading__Container_hidden')

const Loading = (props) => {
  const [state, setState] = useState({
    visible: false,
    type: 'circular'
  })

  useEffect(() => {
    setState({ 
      ...state, 
      type: props.type
    })
  },[ props.visible ]) // eslint-disable-line react-hooks/exhaustive-deps

  return useMemo(() => {
    return ReactDOM.createPortal(
      <div 
        className={`loading-${state.type}`}
      >
        <Spin indicator={antIcon} size="large"/>
      </div>,
      LoadingContainer
    )
  },[ state.visible ]) // eslint-disable-line react-hooks/exhaustive-deps
}

Loading.show = (config) => {
  if(LoadingContainer) return
  const props = { ...config, visible: true }
  const container = LoadingContainer = document.createElement('div')
  const manager = container[modelSysbol] = {
    setShow: null,
    hidden() {
      const { setShow } = manager
      setShow && setShow(false)
      ReactDOM.unmountComponentAtNode(container)
      document.body.removeChild(container)
      LoadingContainer = null
    }
  }
  const LoadingApp = (propsValue) => {
    const [ show, setShow ] = useState(false)
    manager.setShow = setShow
    const { visible, ...trueProps } = propsValue
    useEffect(()=>{
      setShow(visible)
    },[])  // eslint-disable-line react-hooks/exhaustive-deps
    return <Loading {...trueProps} visible={show} />
  }
  /* 插入到body中 渲染React元素*/
  document.body.appendChild(container)
  ReactDOM.render(<LoadingApp {...props} />, container)
  return manager
}

Loading.hidden = () =>{
   if(!LoadingContainer) return
   LoadingContainer[modelSysbol] && LoadingContainer[modelSysbol].hidden()
}

export default Loading
