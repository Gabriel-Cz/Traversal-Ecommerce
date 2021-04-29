import { saveCartState, loadCartState } from "../../cartStore";

export default (req, res) => {
    const method = req.method;
    const state = {producto: "asd"};
    try {
        switch (method) {
            case 'GET': 
                let cartState = loadCartState(); 
                return res.status(200).json(...cartState);
                break
            case 'POST':
                let newCartState = saveCartState(state);
                return res.status(200).json(...newCartState);
                break
        } 
    } catch (err) {
        console.log(err)
    }
}