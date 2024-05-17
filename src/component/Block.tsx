export function Block({letter,status}:{letter:string,status:string}) {
    return(
    <>
        <span className={`block ${status}`}>{letter}</span>
    </>
    )
}