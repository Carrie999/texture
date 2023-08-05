import styles from './circular.module.css'


const CirclarOne = ({color='#8dc58d'})=>{
    return <svg 
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width="209px" height="208px">
    <path fillRule="evenodd"  opacity="1" fill={color}
    d="M0.782,207.685 C0.783,93.363 93.460,0.688 207.782,0.688 C208.120,0.688 208.455,0.699 208.792,0.700 C208.785,115.23 116.106,207.698 1.782,207.698 C1.448,207.698 1.116,207.687 0.782,207.685 Z"/>
    </svg>
}

const CirclarTwo = ({color='#e7eb80'})=>{
    return <svg 
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width="210.5px" height="209.5px">
   <path fillRule="evenodd"  stroke="rgb(255, 226, 238)" strokeWidth="1px" strokeLinecap="butt" strokeLinejoin="miter" fill={color}
    d="M0.848,1.200 C1.185,1.199 1.520,1.188 1.858,1.188 C116.180,1.188 208.856,93.863 208.858,208.185 C208.524,208.187 208.192,208.198 207.858,208.198 C93.533,208.198 0.854,115.523 0.848,1.200 Z"/>
   </svg>
}


let flag = 1
let color = 'one'


export default function Circlar({colorOne='#8dc58d',colorTwo='#e7eb80'}) {
    let Arr = new Array(20).fill('')
    let Arr2 = new Array(5).fill('')

    const renderImage = (index,index2)=>{
        flag = flag+1
        if(flag>4){
            flag = 1
        }
      
        if(flag === 1 || flag === 2){
            color = 'one'
            if( index2 % 2 ===1){
                color = 'two'
            }
        }
        if(flag === 3 || flag === 4){
            color = 'two'
            if( index2 %2 ===1){
                color = 'one'
            }
        }
        return  <div className={styles.svg} >
                    {index %2 === 0 ? <CirclarOne color={ color === 'one'?colorOne:colorTwo }/>:<CirclarTwo color={ color === 'one'?colorOne:colorTwo}/>}
                </div>
    }
    const renderImage2 = (index,index2)=>{
        flag = flag+1
        if(flag>4){
            flag = 1
        }
        if(flag === 1 || flag === 2){
            color = 'one'
            if( index2 % 2 ===1){
                color = 'two'
            }
           
        }
        if(flag === 3 || flag === 4){
            color = 'two'
            if( index2 %2 ===1){
                color = 'one'
            }
        }
        return  <div className={styles.svg} >
                    {index %2 === 0 ? <CirclarTwo color={ color === 'two' ?colorOne:colorTwo }/>:<CirclarOne color={ color === 'two'?colorOne:colorTwo}/>}
                </div>
    }

    return  <div>
               {
                 Arr2.map((_,index2)=>
                 <>
                    <div style={{fontSize:'0',textAlign: 'left', whiteSpace: 'nowrap'}}>
                        {
                            Arr.map((_,index)=>(
                                <div className={styles.piece} key={index}>
                                {renderImage(index,index2)}
                                </div>
                        ))}
                    </div>
                    <div style={{fontSize:'0',textAlign: 'left', whiteSpace: 'nowrap'}}>
                        {
                        Arr.map((_,index)=>(
                            <div className={styles.piece} key={index}>
                            {renderImage2(index,index2)}
                            </div>
                        ))}
                    </div>
                 </>
                 )
               }
              
            </div>



}