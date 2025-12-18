export interface ResumeBlockBase {
  id: string;
  title: string;
}

export interface ResumeBlockItem<T, Type extends string>
  extends ResumeBlockBase {
  type: Type;
  data: T;
}

