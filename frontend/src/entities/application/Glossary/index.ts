import { Description, GlossaryId, Title } from "@type";

interface IGlossary {
  /**
   * 役ID
   *
   * @type {GlossaryId}
   * @required
   * @memberof IGlossary
   */
  id: GlossaryId;

  /**
   * 
   *
   * @type {Title}
   * @required
   * @memberof IGlossary
   */
  title: Title;

  /**
   * 役の説明文
   *
   * @type {Description}
   * @required
   * @memberof IGlossary
   */
  description: Description;

  /**
   * 更新日時
   *
   * @type {Date}
   * @required
   * @memberof IGlossary
   */
  updatedAt: Date;
}

export default class Glossary implements IGlossary {
  public readonly id = '';
  public title: Title;
  public description: Description;
  public updatedAt: Date;

  constructor(props?: IGlossary) {
    this.title = props.title;
    this.description = props.description;
    this.updatedAt = props.updatedAt;
  }
}