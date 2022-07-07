import "./catalog.css";
import Catalogprod from "./catalogprod";

export const Catalog = () => {
  return (
    <div className="catalog-container">
                        <form action="#">
                            <select name="filter" id="filter">
                                <option value="filterby">Filter By</option>
                                <option value="test">Test</option>
                            </select>
                            <select name="order" id="order">
                                <option value="orderby">Order By</option>
                                <option value="test">Test</option>
                            </select>
                            <input className="go" type="submit" value="Go"/>
                            <input className="clear" type="submit" value="Clear"/>
                        </form>

                        <Catalogprod></Catalogprod>
                    </div>
  );
};

export default Catalog;
