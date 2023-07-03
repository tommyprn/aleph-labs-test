import "./index.css";

interface ListItemsProps {
  classname?: string;
  itemList: string[];
  title: string;
}

export const ListItems = ({
  classname,
  itemList,
  title,
}: ListItemsProps) => {
  return (
    <div
      className={`item-list-container ${classname}`}
    >
      <p className="list-title">{title}:</p>

      <ul className="list-item">
        {itemList.map((item) => {
          return <li>{item}</li>;
        })}
      </ul>
    </div>
  );
};

export default ListItems;
