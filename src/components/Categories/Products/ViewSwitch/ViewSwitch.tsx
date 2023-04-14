import GridIcon from '../../../../ui/icons/GridIcon/GridIcon';
import ListIcon from '../../../../ui/icons/ListIcon/ListIcon';
import ViewButton from '../ViewButton/ViewButton';
import ProductsSum from '../ProductsSum/ProductsSum';
import s from './ViewSwitch.module.scss'
const ViewSwitch = () => {
    return (
        <div className={s['container']}>
            <ViewButton
                name='grid'
            >
                <GridIcon />
            </ViewButton>
            <ViewButton
                name='list'
            >
                <ListIcon />
            </ViewButton>
            <ProductsSum />
        </div>
    );
};

export default ViewSwitch;