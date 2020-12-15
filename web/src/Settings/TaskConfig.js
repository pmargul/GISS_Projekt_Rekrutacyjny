import Translations from "./Translations";

export const TaskPriorities = (lang) => [
  {
    label: Translations.low[lang],
    id: 0,
  },
  {
    label: Translations.medium[lang],
    id: 1,
  },
  {
    label: Translations.high[lang],
    id: 2,
  },
];
export const TaskTableColumns = (lang) => [
  {
    label: Translations.number[lang],
    key: "number",
  },
  {
    label: Translations.name[lang],
    key: "name",
  },
  {
    label: Translations.priority[lang],
    key: "priority",
    select: TaskPriorities(lang),
  },
  {
    label: Translations.creationDate[lang],
    key: "creationDate",
    datetime: true,
  },
  {
    label: Translations.term[lang],
    key: "term",
    datetime: true,
  },
  {
    label: Translations.realized[lang],
    key: "realized",
    boolean: true,
  },
];

export const getTaskJSON = (data,forEdit=false) =>{
  const json = {}
  json.name = data.name
  json.term = data.term
  json.priority = data.priority? data.priority.id : null
  json.description = data.description
  if(forEdit){
    json._id = data._id
  }

  return json
}
