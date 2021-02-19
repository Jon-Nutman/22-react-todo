export default function ListAdjusterComponent(props){
    return <div className='bottom-bar'>
        <p>{props.count} Items Left</p>
        <div>
        <button className='bottom-buttons'>
            All 
        </button>
        <button className='bottom-buttons'>
            Activate
        </button>
        <button className='bottom-buttons'>
            Completed
        </button>
        </div>
    </div>
}