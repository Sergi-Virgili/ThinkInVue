<?php

use Illuminate\Database\Seeder;

class ThoughtsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        App\Thought::create([
            'description' => 'first description',
            'user_id' => 1
        ]);
    }
}
