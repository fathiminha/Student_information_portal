import '../assests/css/compo.css'
export default function StudentTable(props){
    return(
        <div className="outerDiv">
            <div className="leftDiv">
                <table>
                    <thread>
                        <tr>
                            <td> First Name </td>
                            <td> Last Name </td>
                            <td> Course </td>
                            <td> Country </td>
                        </tr>
                    </thread>
                </table>
            </div>

        </div>
    )
}