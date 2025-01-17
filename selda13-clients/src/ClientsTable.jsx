const CLientsTable = () => {
    return ( 
        <table>
            <thead>
                <tr>
                    <th id="identifier">ID</th>
                    <th id="name">Name</th>
                    <th>Plan</th>
                    <th>Contact</th>
                    <th>Paid</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
            <tr>
                    <td>1</td>
                    <td>Mario</td>
                    <td>Fiber</td>
                    <td>09617855958</td>
                    <td>Not yet</td>
                    <td>
                        <button>view</button>
                        <button>edit</button>
                        <button>delete</button>
                    </td>
            </tr>
            <tr>
                    <td>1</td>
                    <td>Mario</td>
                    <td>Fiber</td>
                    <td>09617855958</td>
                    <td>Not yet</td>
            </tr>
            </tbody>
        </table>
     );
}
 
export default CLientsTable;