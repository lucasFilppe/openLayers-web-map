# openLayers-web-map

### `Para criar um mapa OpenLayers em React`

- Use o `comando npm install ol`
- Criar um objeto Map que  será nosso componente principal e deve ter pelo menos três coisas:

  - `View`(visualizar): define a área onde o mapa será exibido e inicialmente aceita argumentos como níveis de zoom e os níveis de zoom tem como zoom máximo e zoom mínimo, etc… e centro inicial para visualização etc.
  - `Layer`(Camada): é o tipo de  imagem do mapa que você gostaria de ver no seu mapa
  - `target container`(container de destino)

### `Aprendendo a usar: import Feature from 'ol/Feature.js';`
Um objeto vetorial para características geográficas com uma geometria e outros propriedades de atributo, semelhantes aos recursos em formatos de arquivo vetoriais como GeoJSON.[https://openlayers.org/en/latest/apidoc/module-ol_Feature-Feature.html](Feature)
