import styles from './lattice.module.css'



export default function Chess({colorOne='#c0c6a2',colorTwo='#edebdb'}) {
    let Arr = new Array(10).fill('')
    let Arr2 = new Array(20).fill('')
    return  <div style={{position:'relative',fontSize:'0',paddingTop:'20px'}}>
               {
                Arr.map((_,index)=>(
                    <div className={styles.line} key={index} style={{background: colorOne}}></div>
                ))
               }
               <div className={styles.line2}>
                {
                    Arr2.map((_,index)=>(
                        <div className={styles.line} key={index} style={{background: colorOne}}></div>
                    ))
                }
               </div>

               
               
            </div>;
}