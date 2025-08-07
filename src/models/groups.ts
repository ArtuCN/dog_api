type AttributesGroup={
    name: string;
}

type Data={
    id: string
    type: string
}

export type Group={
    id: string
    type: string
    attributes: AttributesGroup
    data: Data[]
}