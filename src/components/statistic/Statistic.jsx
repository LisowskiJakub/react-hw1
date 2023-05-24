import css from './Statistic.module.css';
import PropTypes from 'prop-types';

const getRandomHexColor = () => {
    let bgColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    return bgColor;
}

export const Stats = ({ stats, title }) => (
    <section className={css.statistics}>
        {title && <h2 className={css.title}>{title}</h2>}
        <ul className={css.statList}>
            {stats.map(stat =>
            (<li className={css.statListItem} key={stat.id}
                style={{
                    backgroundColor: getRandomHexColor(),
                }}>
                <span className={css.label}>{stat.label}</span>
                <span className={css.percentage}>{stat.percentage}%</span>
            </li>))}
        </ul>
    </section>
)

Stats.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.array.isRequired,
}