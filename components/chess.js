import styles from './chess.module.css'



export default function Chess({colorOne='#c0c6a2',colorTwo='#edebdb'}) {
    let Arr = new Array(350).fill('')
    return  <div style={{fontSize:'0'}}>
                {
                    Arr.map((item,index)=>(
                            <div className={styles.block} key={index} style={{background: index %2 === 0?colorOne:colorTwo}}></div>
                    ))
                } 
            </div>;
}