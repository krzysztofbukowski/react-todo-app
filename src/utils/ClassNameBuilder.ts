export default class ClassNameBuilder {
  public static build(classes: {}) {
    return Object
      .keys(classes)
      .filter((key) => classes[key] === true)
      .join(' ');
  }
}
