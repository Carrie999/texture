import styles from './grid.module.css'



export default function Chess({colorOne='#c0c6a2',colorTwo='#ffffff'}) {
    let Arr = new Array(30).fill('')
    let Arr2 = new Array(40).fill('')
    return  <div style={{position:'relative',background:colorOne,width:'100%',height:'100%',paddingTop:'20px'}}>
                {
                    Arr.map((_,index)=>(
                        <div className={styles.line} style={{background:colorTwo}} key={index}></div>
                    ))
                }
                 <div className={styles.line2}>
                {
                    Arr2.map((_,index)=>(
                        <div className={styles.line} style={{background:colorTwo}} key={index} ></div>
                    ))
                }
               </div>

                
            </div>;
}