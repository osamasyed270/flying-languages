import React, { useState } from 'react'

function Tabs({ children }) {
    const [activeTab, setActiveTab] = useState(0)

    const handleTabClick = (index) => {
        setActiveTab(index)
    }

  return (
    <div className="tabs-container">
        <div className="tabs-top">
            {React.Children.map(children, (child, index) => (
                child.props.tabTitle ? 
                    <button
                        className= {`tab-btn ${index === activeTab ? 'active-tab-btn' : ''}`}
                        onClick={() => handleTabClick(index)}
                    >
                        {child.props.tabTitle}
                    </button> 
                : ''
            ))}
        </div>
        <div className="small-container tabs-content">
            {React.Children.map(children, (child, index) => (
                child.props.tabTitle ? 
                    index === activeTab ? child : null
                : ''
            ))}
        </div>
    </div>
  )
}

export default Tabs