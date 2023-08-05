import styles from './bias.module.css'


export default function Chess({colorOne='#c0c6a2',colorTwo='#ffffff'}) {
    let Arr = new Array(100).fill('')
    let Arr2 = new Array(60).fill('')
    return  <div style={{position:'relative',background:colorTwo,width:'100%',height:'100%',paddingTop:'20px'}}>
          <div className={styles.line1}>
                {
                    Arr.map((_,index)=>(
                        <div className={styles.line} key={index} style={{background:colorOne}}></div>
                    ))
                }
                </div>
                {/* <div className={styles.line2}>
                {
                    Arr2.map((_,index)=>(
                        <div className={styles.line} key={index} style={{background:colorOne}}></div>
                    ))
                }
               </div> */}

                
            </div>;
}