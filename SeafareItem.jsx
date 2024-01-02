const SeafareItem = ({ data }) => {
  return (
      <div>
          {data.map(item => (
              <article key={item.id} className="seafareItem">
                  <h2 className="seafareItem_title">{item.title}</h2>
                  <p className="seafareItem_details">
                      {item.start_date} - {item.end_date} | {item.destination} ({item.seafare_area})
                  </p>
                  <h3 className="seafareItem_captain">Captain: {item.captain_first_name} {item.captain_last_name}</h3>
              </article>
          ))}
      </div>
  );
};

export default SeafareItem;