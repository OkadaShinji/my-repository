import java.sql.*;

public class RecipeDatabase {
    public static void main(String[] args) {
        // データベース接続情報
        String url = "jdbc:mysql://localhost:3306/recipes";
        String user = "username";
        String password = "password";

        try {
            // MySQLドライバをロード
            Class.forName("com.mysql.cj.jdbc.Driver");

            // データベースに接続
            Connection con = DriverManager.getConnection(url, user, password);

            // レシピ情報を取得するためのクエリを作成
            String query = "SELECT * FROM recipe";

            // クエリを実行
            Statement stmt = con.createStatement();
            ResultSet rs = stmt.executeQuery(query);

            // レシピ情報を取得
            while (rs.next()) {
                int id = rs.getInt("id");
                String name = rs.getString("name");
                String description = rs.getString("description");
                String imageUrl = rs.getString("image_url");
                int prepTime = rs.getInt("prep_time");
                int cookTime = rs.getInt("cook_time");
                int servings = rs.getInt("servings");
                System.out.println("ID: " + id);
                System.out.println("Name: " + name);
                System.out.println("Description: " + description);
                System.out.println("Image URL: " + imageUrl);
                System.out.println("Prep Time: " + prepTime);
                System.out.println("Cook Time: " + cookTime);
                System.out.println("Servings: " + servings);
            }

            // データベースとの接続を閉じる
            rs.close();
            stmt.close();
            con.close();

        } catch (ClassNotFoundException e) {
            e.printStackTrace();
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }
}