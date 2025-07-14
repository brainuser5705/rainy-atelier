export default function Closeable({id_list, children}) {

  const toggleCloseable = () => {
    id_list.forEach(id => {
        const elem = document.getElementById(id);
        if (elem) elem.classList.toggle("hidden");
    });
  };

  return (
    <div className="closeable" onClick={toggleCloseable}>
      { children }
    </div>
  );
}