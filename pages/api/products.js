import productsData from '../../public/productsData.json'

export default (req, res) => {
    res.status(200).json(productsData);
}