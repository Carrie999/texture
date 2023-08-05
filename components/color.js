import React, { useState } from 'react';
import { ColorSelector } from 'color-selector-react';
import { ColorSelector as ColorSelectorTwo} from 'color-selector-react';
import 'color-selector-react/dist/es/index.css'; // 样式


export default function Chess({color,setColor}) {
    const [visible, setVisible] = useState(false);
    return  <div style={{display:'inline-block'}}>
            <div
            color={color}
            onClick={() => setVisible(!visible)}
            style={{
                width: 20,
                height: 20,
                border: '0px solid #ccc',
                backgroundColor: color,
            }}/>
                {<ColorSelector
                key='1'
                style={{ position: 'absolute',zIndex:'20' }}
                color={color}
                visible={visible}
                onChange={({ color }) => setColor(color)}
                onVisibleChange={(v) => setVisible(v)}
                />}
            </div>
          
       
}