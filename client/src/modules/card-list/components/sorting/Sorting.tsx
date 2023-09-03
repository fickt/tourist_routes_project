import s from "./styles.module.scss";
import {Select} from "antd";
import {TSortingProps} from "./types";
import {sortTabs} from "modules/card-list/constants/sortOptions";
import {useAppSelector} from "storage/hookTypes";
import {spotsSelector} from "modules/card-list/store/spotsSelectors";
import {useDispatch} from "react-redux";
import {handleSpots} from "modules/card-list/store/spotsActions";

export const Sorting = ({options}: TSortingProps) => {
    const spots = useAppSelector(spotsSelector);
    const dispatch = useDispatch();
    const sortSpots = (value: string) => {
        const sortedArray = [...spots];

        sortedArray.sort((a, b) => {
            const aIncludesValue = a.categories.includes(value);
            const bIncludesValue = b.categories.includes(value);

            if (a.difficulty === value && b.difficulty !== value) {
                return -1;
            } else if (a.difficulty !== value && b.difficulty === value) {
                return 1;
            } else if (aIncludesValue && !bIncludesValue) {
                return -1;
            } else if (!aIncludesValue && bIncludesValue) {
                return 1;
            } else {
                return 0;
            }
        });
        dispatch(handleSpots(sortedArray));
    }

    return (
        <div className={s.sort}>
            <span className={s.sort__title}>Сортировка:</span>
            <Select
                defaultValue={sortTabs.rating.category}
                options={options}
                className={s.selector}
                onChange={sortSpots}
            />
        </div>
    )
}
