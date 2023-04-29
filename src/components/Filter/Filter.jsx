import PropTypes from "prop-types";
import { Wrap, Text, Select } from "./Filter.styled";

export const Filter = ({ changeFilter }) => {
  return (
    <Wrap>
      <Text htmlFor="follow">Filter</Text>
      <Select id="follow" name="follow" onChange={changeFilter}>
        <option value="all" defaultValue>
          Show all
        </option>
        <option value="follow">Follow</option>
        <option value="following">Following</option>
      </Select>
    </Wrap>
  );
};

Filter.propTypes = { changeFilter: PropTypes.func.isRequired };
