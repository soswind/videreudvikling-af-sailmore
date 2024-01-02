import globe from '../images/globe.png'
 /*
export default function DashboardSeafare(props) {
  return (<section className="seafare">
    <img src={globe} /><p>{props.seafare_name}</p> <p>D. {props.start_date} - {props.end_date}</p>
  </section>)
} */

const DashboardSeafareItem = ({ data }) => {
  return (
      <div>
          {data.map(item => (
              <section className="DashboardSeafareItem">
                <img src={globe} /><p>{item.title}</p> <p>D. {item.start_date} - {item.end_date}</p>
              </section>
          ))}
      </div>
  );
};

export default DashboardSeafareItem;