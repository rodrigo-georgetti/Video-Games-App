const validation = ({ name }) => {
    const errors = {}
    if (!name) errors.name = "ingrese un nombre valido"
    return errors;
};
