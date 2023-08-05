import styles from './dot.module.css'



export default function Chess({colorOne='#c0c6a2',colorTwo='#edebdb'}) {
    let Arr = new Array(50).fill('')
    let Arr2 = new Array(30).fill('')
    console.log(2222,colorOne,colorTwo)
    return  <div style={{fontSize:'0',background:colorTwo}}>
        {Arr2.map((_,index)=>(
            <div className={index%2===0?styles.circleLine:styles.circleLine2} key={index}>
                    {
                        Arr.map((_,index2)=>(
                            <div className={styles.circle}  key={index2} style={{background: colorOne}}></div>
                        ))
                    } 
                </div>
        )
        )}
                
            </div>;
}