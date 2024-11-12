function ListPro(props) {
    return (
        <li class="list-group-item d-flex justify-content-between align-items-start">
            <div class="ms-2 me-auto">
                <div class="fw-bold">{props.data.name}</div>
                {props.data.price}
            </div>
            <span onClick={() => props.listRemove(props.data.id)}
                class="badge text-bg-primary rounded-pill">X</span>
        </li>
    )
};
export default ListPro;