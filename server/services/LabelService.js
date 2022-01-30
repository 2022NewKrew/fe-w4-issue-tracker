import { Label } from '../models/Label.js';
import { BoardLabel } from '../models/BoardLabel.js';
import { error } from '../errors/index.js';

const getLabels = async () => {
  const result = await Label.find({});
  return result;
};

const getLength = async () => {
  const result = await Label.find({});
  return result.length;
};

const createLabel = async (data) => {
  const labelInfo = await Label.findOne({ name: data.name });
  if (labelInfo) throw new Error(error.CREATE_LABEL_ERROR);
  const label = new Label(data);
  await label.save();
};

const updateLabel = async (_id, data) => {
  await Label.findOneAndUpdate({ _id }, data);
};

export const LabelService = { getLabels, getLength, createLabel, updateLabel, deleteLabel };
