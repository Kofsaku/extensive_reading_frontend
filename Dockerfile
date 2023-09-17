# 使用するベースイメージの指定
FROM node:18

# ワーキングディレクトリの設定
WORKDIR /app

# 依存関係のファイルをコンテナにコピー
COPY package*.json ./

# 依存関係のインストール
RUN npm install

# アプリのソースをコンテナにコピー
COPY . .

# アプリを実行するコマンド
CMD [ "npm", "start" ]
